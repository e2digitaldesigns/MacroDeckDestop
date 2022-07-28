import useObjHooks from "./useObjHook";

describe("Use Object Hook", () => {
  const { actionObj, buttonPadObj, pageObj, profileObj } = useObjHooks();
  const _id = "ef6941ad-1b8b-44a6-86dc-3fc41cd7c0e6";

  it("Should return actionObj", () => {
    const newObj = actionObj(_id);
    expect(typeof newObj).toBe("object");
    expect(newObj._id).toBe(_id);
  });

  it("Should return actionObj with new _id", () => {
    const newObj = actionObj();
    expect(typeof newObj).toBe("object");
    expect(typeof newObj._id).toBe("string");
  });

  it("Should return buttonPadObj", () => {
    const newObj = buttonPadObj(_id);
    expect(typeof newObj).toBe("object");
    expect(newObj._id).toBe(_id);
  });

  it("Should return buttonPadObj with new _id", () => {
    const newObj = buttonPadObj();
    expect(typeof newObj).toBe("object");
    expect(typeof newObj._id).toBe("string");
  });

  it("Should return pageObj", () => {
    const newObj = pageObj(_id);
    expect(typeof newObj).toBe("object");
    expect(newObj._id).toBe(_id);
  });

  it("Should return pageObj with new _id", () => {
    const newObj = pageObj();
    expect(typeof newObj).toBe("object");
    expect(typeof newObj._id).toBe("string");
  });

  it("Should return profileObj with given _id", () => {
    const newObj = profileObj(_id);
    expect(typeof newObj).toBe("object");
    expect(newObj._id).toBe(_id);
  });

  it("Should return profileObj with new _id", () => {
    const newObj = profileObj();
    expect(typeof newObj).toBe("object");
    expect(typeof newObj._id).toBe("string");
  });
});
