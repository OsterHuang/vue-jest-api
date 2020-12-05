import { inquiryUserRepository } from "@/api/repository";

test("Test call API", async () => {
  const result = await inquiryUserRepository("OsterHuang");
  console.log(result.data);
  expect(Array.isArray(result.data)).toBeTruthy;
});
