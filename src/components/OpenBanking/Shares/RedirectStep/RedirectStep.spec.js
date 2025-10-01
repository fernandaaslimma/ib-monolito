import React from "react";
import { shallow } from "enzyme";
import RedirectStep from "./RedirectStep";
import store from "../../../../utils/store";
import { act } from "react-dom/test-utils";
import { OpenBankingSharesContext } from "../Shares";
import "@testing-library/jest-dom";

jest.mock("../../../../utils/store", () => ({
  setState: jest.fn()
}));

const context = {
  setState: jest.fn(),
  props: {
    shareResponseJsonPatch: {
      redirect_uri:
        "https://auth-sandbox.hom.bocombbm.com.br/jans-auth/authorize?client_id=39f9fc48-2a28-4025-b029-d347916177f6&scope=customers%20resources%20invoice-financings%20financings%20loans%20unarranged-accounts-overdraft%20accounts%20openid%20consent:urn:bocombbm:c0659911-3d3b-47e8-9be7-192e1048df02&request=eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.hwPsevK1ecQlqo1uDEl6x7MJmwwukH9EXE0Y6AFAXTtVlbOzZ8w9vREHXSixgBFIgFb0cxTAAYqU7WdSuycv9maM-l6mAnP2f1M6JXfFIePcxJ7e6HvQuoDyPwmaG7EH4FCX2tXj26lIhXe3hsGn1BLRXWOlJPjVW5eL7ZeR9tTuSMeVEefwpPCPyWgrd-7Vs4KkDy5xgdXjEaTqRMPIe6UH8KYYd-ImEHqh8snNlM377og0EwmNULt3QTnttfaEQJPYOJkL3yJ_93S_czyYjsSbFHJ84mX2Qp4GBnlwhYFCpMLwlhOVO88GBevWLxrZM-RUmQ_pJfkHYBNkTCfZ9w.Bb6QMPrbTZ3GrpR6.K2NT3zxKwzwZ3JWiw7bc1U9drNBN4B592K9h7__ZIJAx-ygkWVwRpNHTrBnyq7OA4WNUg8AxKCc4apxADDebezCi_g2TGXjs20KT7DkhfwPJDoFRWZ6w_-3NulWqvk71zJUZ-4iXDtHyD0gDU-YxZe1s1s9gsGuKQpxBY2c6xDh9S8hu3kHymVwYKzwkN9t90x5VP3_zCuNwzKONFV5Cu_uQD8go9t4BLXXhXKvs8VGFH-Ow8kGt_B_VPSqRA893UUWinnODGC9LuWipuqSrwtmtHw2ctywEnDYn5v6Z-EMii2Cp-U-MPMHTqykNaBuQ_oDTZIkuCSlTiJihfML6vXCLg2EC_pJ13Dp0JDxuxIZYOTWtqD4lB_XZmBbSQMhwpm9hmWQJPevkFnlHZA8dyxLaU4Z3Gk90qieYIstXxdFrVLTs1nRwyjHUTzqtKZmRuMgRI_hJIIf8KpfoD8haRe4HS7rH594HhxbfzldwLg0ZfoXit3tmi9CixJyXMTLabf1pgtwkbtDlQo7lkQCfMsrFhWnUi9VJdibTJvkzgNLiLJHAtXRyYgEwIDfOSQdt0GvTx8WqaNO7IReLgpzyfp7IuDdW5UCmYidGH56cKV66c8aRNWfBX45wmDRws4Pv32QgqfyeQDLOYd6ov2VQgNpysfdWtQmZt3liVZ01BtIl_L36JKhoP8wdNVcrFOsc8Y9bDYl5Yur2yTuYcEqlffVst05_g1w1pbiGIl6eNqqWWDWw_iTPfh6_hXkOqYarK7VDfo3s4l23yA6Zufnp3L9D9MLdAIUmM5SxYpqcxagV9xrdZmNaZJWVroV26IRrUmoGFgEp8cztgO2ECcLTj2fyFNT82IN5vFc_wWNcVtG5Cc6W3oKA7GzUfcOXIqU0pwtGZbfiGbb5Rpe9wwdwUOyyumC84d1KSFIK7nmQBi7rOX572FEoycq9KgaV5yAyVSi7Gzv2DwdGaw7BGd-buYqucBgO7QrFvvKW-FBZwqV29OBpr0dittkmLJ9a83mMQYGhXp1r49l0J-A-Y2cc6lAighp57UujDQ5CAFhiz2LbYirA_cZ_OTlxv6h2M7IMMX3m3NZp-Rbo5MsqbTCCyRnwpOlVz8L5v6xmmi4mUaesgBb2Motm8hN6v0zLHi_HVPoV84GRp-JTHk395a0p-Y-byfEbFEKyQxydc95yIatbV0MZv09WLuuKZbGGXCpcz9C7MKxvImhj6uxH7ZwIYTF5gV3MxgQpMz41naMRITIGl6PMvL4xGlgR5VI5d9XDoagGj-FxnGjWLBUpiP7TkPKm1gMDafqs9KlkeWqd42ELvfHbf40-hHr4X1-AFB7tZma1fjHHKEtiItE0dqqxZeV7xjBcHW4IfwsiIyUc88eRQdc0HtbywnN4Zked25NEQwJJE6K3zPFBsbG6YrAACMJL4u6GDxmXYirCNS-OhSdD9o-IgJt7Q3C56C_Kft3jyXkMQbWs_QQ_XLorz8Vr9wREr-HKNPUeROI9zj029Emdb8S0Z2yHxPw81vuEYqSqAQEQjNxmjoMoFkSf34k6OrJ_CrKmkbvsbsHmc8ql3_P867EiYnzgCOsXnTGDomew00L_7QjSmCJxps9e1Da6SN42uIi6zJ5mP1POUdpC6Gx0spPCH2qpj0i5wCavdRgWDe1lZRKUsH4UkiM4oVj65n9m5I9Wwb_mw4As9CHw9mTWukP9QSjHkaf0yDvfNxlHIqTlxDBJcG89yZR7TuHqqB9vN1BlBPVTgBhN9toxm73dZGo0SHtCGZ0Ax71IM5I_7RIXCshfgLfs9XlIaub1le_nAJlV2mdHn-PkWxQ7S1aBTxHK5qAhD3SPsed9id7RdQD8jZrAJZ00EaPujZQArcTtQs7x2XhlhWXgSme4i88BjgXecGtRTXJIOd0I-88bdFHWIQDcGx9ib5hMony4-rGIYXSQSWMiRg9QRXJ7Ki3tvyA7BHzT78FNMTQKRPX9WDmVfYAzqMVSc0MfmbVojXWXHDQUQDqCt_piWgYsbvLZEBemO5MspENaeeAeEk4bQ20sz0ztX1mNzvbmGGqQXEVOF35bL2lZwJdt6oAT1A4rPfHC1Yyvwykt9AXGakPqWyH4SWdaOABmacdJire1obpZdQg1-W_rIGWVMBY9GLOMakoaaPWr9yz7uNXObUDPCpo4ego7RtrxdSbidwy_rzRenY_Rz2kElg.FEAaBFPxjaxDzji_mCioRA&response_type=code%20id_token&state=580363abd3d2abb030de40413e48a592847ee0ba1f7d9d313a7e71654f1d2eaa&redirect_uri=https://auth-sandbox.hom.bocombbm.com.br/open-banking/redirect/v1/bank-callback&nonce=11692b72bd4a5ee717c89418b5e9f3b2b9f6c01b4243187f1d1219035f35cd01"
    }
  },
  state: {
    consentLogo: "mock url",
    consentName: "mock name",
    consentCreated: {
      authorisationServer: {
        organisationId: "4a7250ec-eac5-5d8f-b7eb-dc0e8e880203"
      }
    }
  }
};

const props = {
  currentStep: 7
};

describe("RedirectStep", () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };
  beforeEach(() => {
    jest.useFakeTimers();
    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });
  it.skip("should match snapshot and redirect after create consent", () => {
    const component = shallow(
      <OpenBankingSharesContext.Provider value={context}>
        <RedirectStep {...props} />
      </OpenBankingSharesContext.Provider>
    );

    expect(component).toMatchSnapshot();
    act(() => {
      jest.runOnlyPendingTimers();
    });
    component.update();
    expect(store.setState).toHaveBeenCalled();
  });

  it("should match snapshot with generic informations", () => {
    context.props.consentName = null;
    context.props.consentLogo = null;
    const component = shallow(
      <OpenBankingSharesContext.Provider value={context}>
        <RedirectStep {...props} />
      </OpenBankingSharesContext.Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
