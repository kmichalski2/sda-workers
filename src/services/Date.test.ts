import { formatDate } from "./Date";

describe("Date", () => {
    test("should return 2024-01-01 for date 1-1-2024", () => {
        const givenDate = new Date('1-1-2024');

        const result = formatDate(givenDate);

        expect(result).toEqual('2024-01-01');
    });
})