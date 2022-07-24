describe("example spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5173/src/button/index.html");
    // cy.contains("count").
    const button = cy.get("my-element").shadow().find(".inc_button");

    button.should("contain.text", "count is 0");

    button.click();

    button.should("contain.text", "count is 1");
  });
});
