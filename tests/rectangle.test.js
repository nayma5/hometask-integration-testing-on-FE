import { getRectanglePerimeter, getRectangleArea, getRectangleInfo } from "../js/rectangle";

test("should accurately calculate rectangle perimeter", () => {
    const rectanglePerimeter = getRectanglePerimeter(3, 3);
    expect(rectanglePerimeter).toBe(12);
});

test("should accurately calculate rectangle area", () => {
   const rectangleArea = getRectangleArea(3, 3);
   expect(rectangleArea).toBe(9);
});

test("should provide accurate information about rectangle perimeter and area", () => {
    const rectangleInfo = getRectangleInfo(3, 3);
    expect(rectangleInfo).toBe(console.log("The perimeter of a rectangle is 12 and the area is 9"));
 });