import store from "./index";

describe("store", () => {
  afterEach(() => {
    window = null;
  });

  it("Should the store for common window", () => {
    expect(store.getState).toBeDefined();
    expect(store.middleware).toBeDefined();
    expect(store.reset).toBeDefined();
    expect(store.setState).toBeDefined();
    expect(store.subscribe).toBeDefined();
  });

  it("Should the store for window defined", () => {
    window = {};
    expect(store.getState).toBeDefined();
    expect(store.middleware).toBeDefined();
    expect(store.reset).toBeDefined();
    expect(store.setState).toBeDefined();
    expect(store.subscribe).toBeDefined();
  });
});
