import {
  isSelf,
  getMinByAttribute,
  nextToSign,
  isThereAnyWaitingGroup,
  isWaiting,
  isPending,
  isThereAnySigned,
  reorderArrayItemWithSlice,
  recipientsWithSelfAsFirst,
  sameSignOrder,
  isInProgress,
  getUserInProgress,
  isBlocked
} from "./";
import { PENDING, COMPLETED, SIGNED, IN_PROGRESS, BLOCKED } from "../constants";

import store from "../store";
export const log = logMsg => logMsg;
jest.mock("../store", () => ({
  getState: jest.fn()
}));

const email = "email@email";
const name = "maria xyz";

store.getState.mockImplementation(() => ({
  userInfo: {
    email
  }
}));

describe("isSelf", () => {
  it("should return false when email is different then the store", () => {
    expect(isSelf({ email: "" })).toBe(false);
  });

  it("should return true when email is the same then the store", () => {
    store.getState.mockImplementation(() => ({
      userInfo: {
        email
      }
    }));
    expect(isSelf({ email })).toBe(true);
  });
});

describe("getUserInProgress", () => {
  it("should return False when there are no recipients with status InProgress", () => {
    const group = {
      recipients: [
        {
          email: "asd@asd.com",
          status: COMPLETED
        },
        {
          email: "asd@asd.com",
          status: PENDING
        }
      ]
    };
    expect(getUserInProgress(group)).toBe(false);
  });
  it("should return True when there are recipients with status InProgress", () => {
    const group = {
      recipients: [
        {
          email: "asd@asd.com",
          status: COMPLETED,
          name: "bbbb "
        },
        {
          email: "asd@asd.com",
          status: IN_PROGRESS,
          name: "aaaa"
        }
      ]
    };
    expect(getUserInProgress(group)).toEqual("aaaa ");
  });
});

describe("getMinByAttribute", () => {
  it("should return the lowest item by an attribute", () => {
    const array = [
      {
        signOrder: 3
      },
      {
        signOrder: 1
      },
      {
        signOrder: 2
      }
    ];
    const attr = "signOrder";
    expect(getMinByAttribute(array, attr)).toEqual({ signOrder: 1 });
  });
});

describe("sameSignOrder", () => {
  it("should return true when all elements have the same order", () => {
    const groups = [
      {
        signOrder: 1
      },
      {
        signOrder: 1
      },
      {
        signOrder: 1
      }
    ];
    expect(sameSignOrder(groups)).toBe(true);
  });

  it("should return false when not all elements have the same order", () => {
    const groups = [
      {
        signOrder: 1
      },
      {
        signOrder: 2
      },
      {
        signOrder: 1
      }
    ];
    expect(sameSignOrder(groups)).toBe(false);
  });
});

describe("nextToSign", () => {
  it("should return the first pending item when the other item is complete", () => {
    const groups = [
      {
        signOrder: 1,
        status: COMPLETED
      },
      {
        signOrder: 2,
        status: PENDING
      }
    ];
    expect(nextToSign(groups)).toEqual({
      signOrder: 2,
      status: PENDING
    });
  });

  it("should return the first pending item when the other item is also pending", () => {
    const groups = [
      {
        signOrder: 2,
        status: PENDING
      },
      {
        signOrder: 1,
        status: PENDING
      }
    ];
    expect(nextToSign(groups)).toEqual({
      signOrder: 1,
      status: PENDING
    });
  });

  it("should return empty when there are no pending items", () => {
    const groups = [
      {
        signOrder: 1,
        status: COMPLETED
      },
      {
        signOrder: 2,
        status: COMPLETED
      }
    ];
    expect(nextToSign(groups)).toEqual({});
  });
});

describe("isThereAnyWaitingGroup", () => {
  it("should return false if there's one complete", () => {
    const groups = [
      {
        signOrder: 1,
        status: COMPLETED
      }
    ];
    expect(isThereAnyWaitingGroup(groups)).toBe(false);
  });

  it("should return false if there's one signed", () => {
    const groups = [
      {
        signOrder: 1,
        status: SIGNED
      }
    ];
    expect(isThereAnyWaitingGroup(groups)).toBe(false);
  });

  it("should return true there's not pending", () => {
    const groups = [
      {
        signOrder: 1,
        status: PENDING
      }
    ];
    expect(isThereAnyWaitingGroup(groups)).toBe(true);
  });
});

describe("isBlocked", () => {
  it("should return false if the group is status different then false", () => {
    const groups = [
      {
        id: 1,
        signOrder: 1,
        status: BLOCKED,
        recipients: [
          {
            email,
            name
          }
        ]
      },
      {
        id: 2,
        signOrder: 2,
        status: PENDING,
        recipients: [
          {
            email: "maria@gmail.com",
            name
          }
        ]
      }
    ];
    const group = {
      signOrder: 1,
      status: COMPLETED,
      recipients: [
        {
          email: "maria@gmail.com",
          name
        }
      ]
    };
    expect(isBlocked(groups, group, "name", email)).toBe(false);
  });
  it("should return true if the group is status blocked", () => {
    const groups = [
      {
        id: 1,
        signOrder: 1,
        status: BLOCKED,
        recipients: [
          {
            email,
            name,
            status: BLOCKED
          }
        ]
      },
      {
        id: 2,
        signOrder: 2,
        status: PENDING,
        recipients: [
          {
            email: "julio@gmail.com",
            name: "Julio Kgb"
          }
        ]
      }
    ];
    const group = {
      id: 1,
      signOrder: 1,
      status: BLOCKED,
      recipients: [
        {
          email,
          name,
          status: BLOCKED
        }
      ]
    };
    expect(isBlocked(groups, group, name, email)).toBe(true);
  });
});

describe("isWaiting", () => {
  it("should return false if the group is status different then pending", () => {
    const group = {
      signOrder: 1,
      status: COMPLETED
    };
    expect(isWaiting([], group)).toBe(false);
  });

  it("should return false if no receipient of the group has the same email then userInfo", () => {
    const group = {
      signOrder: 1,
      status: PENDING,
      recipients: [
        {
          email: ""
        }
      ]
    };
    expect(isWaiting([], group)).toBe(false);
  });

  it("should return false if nextToSign.id is the same then the group.id", () => {
    const groups = [
      {
        id: 1,
        signOrder: 1,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      }
    ];
    const group = {
      id: 1,
      signOrder: 1,
      status: PENDING,
      recipients: [
        {
          email
        }
      ]
    };
    expect(isWaiting(groups, group)).toBe(false);
  });

  it("should return false when all items have the same signOrder", () => {
    const groups = [
      {
        id: 1,
        signOrder: 1,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      },
      {
        id: 2,
        signOrder: 1,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      }
    ];
    const group = {
      id: 2,
      signOrder: 2,
      status: PENDING,
      recipients: [
        {
          email
        }
      ]
    };
    expect(isWaiting(groups, group)).toBe(false);
  });

  it("should return true otherwise", () => {
    const groups = [
      {
        id: 1,
        signOrder: 1,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      },
      {
        id: 2,
        signOrder: 2,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      }
    ];
    const group = {
      id: 2,
      signOrder: 2,
      status: PENDING,
      recipients: [
        {
          email
        }
      ]
    };
    expect(isWaiting(groups, group)).toBe(true);
  });
});

describe("isPending", () => {
  it("should return false if the group is status different then pending", () => {
    const group = {
      signOrder: 1,
      status: COMPLETED || IN_PROGRESS,
      recipients: [
        {
          email
        }
      ]
    };
    expect(isPending([], group)).toBe(false);
  });

  it("should return false if no receipient of the group has the same email then userInfo", () => {
    const group = {
      signOrder: 1,
      status: PENDING,
      recipients: [
        {
          email: ""
        }
      ]
    };
    expect(isPending([], group)).toBe(false);
  });

  it("should return false if nextToSign.id is different then the group.id", () => {
    const groups = [
      {
        id: 1,
        signOrder: 1,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      },
      {
        id: 3,
        signOrder: 2,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      }
    ];
    const group = {
      id: 2,
      signOrder: 2,
      status: PENDING,
      recipients: [
        {
          email
        }
      ]
    };
    expect(isPending(groups, group)).toBe(false);
  });

  it("should return true when all groups have the same signOrder", () => {
    const groups = [
      {
        id: 1,
        signOrder: 1,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      },
      {
        id: 2,
        signOrder: 1,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      }
    ];
    const group = {
      id: 1,
      signOrder: 2,
      status: PENDING,
      recipients: [
        {
          email
        }
      ]
    };
    expect(isPending(groups, group)).toBe(true);
  });

  it("should return true otherwise", () => {
    const groups = [
      {
        id: 1,
        signOrder: 1,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      },
      {
        id: 2,
        signOrder: 2,
        status: PENDING,
        recipients: [
          {
            email
          }
        ]
      }
    ];
    const group = {
      id: 1,
      signOrder: 1,
      status: PENDING,
      recipients: [
        {
          email
        }
      ]
    };
    expect(isPending(groups, group)).toBe(true);
  });
});

describe("isThereAnySigned", () => {
  it("should return true if there's at least one complete", () => {
    const recipients = [
      {
        status: COMPLETED
      }
    ];
    expect(isThereAnySigned(recipients)).toBe(true);
  });

  it("should return false otherwise", () => {
    const recipients = [
      {
        status: PENDING
      }
    ];
    expect(isThereAnySigned(recipients)).toBe(false);
  });
});

describe("reorderArrayItemWithSlice", () => {
  it("return the same list when there is no self", () => {
    const items = [
      {
        email: "abc@abc.com"
      },
      { email: "asd@asd.com" }
    ];
    expect(reorderArrayItemWithSlice(items)).toEqual(items);
  });

  it("return a new list when self is present", () => {
    const items = [
      {
        email: "abc@abc.com"
      },
      { email }
    ];
    expect(reorderArrayItemWithSlice(items, 1)).toEqual([
      { email },
      { email: "abc@abc.com" }
    ]);
  });
});

describe("recipientsWithSelfAsFirst", () => {
  it("return the same list when there is no self", () => {
    const items = [
      {
        email: "abc@abc.com"
      },
      { email: "asd@asd.com" }
    ];
    expect(recipientsWithSelfAsFirst(items)).toEqual(items);
  });

  it("return a new list when self is present", () => {
    const items = [
      {
        email: "abc@abc.com"
      },
      { email }
    ];
    expect(recipientsWithSelfAsFirst(items)).toEqual([
      { email },
      { email: "abc@abc.com" }
    ]);
  });
});

describe("isInProgress", () => {
  it("should return false when there are no recipients with status InProgress", () => {
    const group = {
      recipients: [
        {
          email: "asd@asd.com",
          status: COMPLETED
        },
        {
          email: "asd@asd.com",
          status: PENDING
        }
      ]
    };
    expect(isInProgress(group)).toBe(false);
  });

  it("should return false when there is at least one with status InProgress but the email is different then the userInfo", () => {
    const group = {
      recipients: [
        {
          email: "asd@asd.com",
          status: COMPLETED
        },
        {
          email,
          status: IN_PROGRESS
        }
      ]
    };
    expect(isInProgress(group)).toBe(false);
  });

  it("should return true when there is at least one with status InProgress", () => {
    const group = {
      recipients: [
        {
          email,
          status: COMPLETED
        },
        {
          email: "asd@asd.com",
          status: IN_PROGRESS
        }
      ]
    };
    expect(isInProgress(group)).toBe(true);
  });
});
