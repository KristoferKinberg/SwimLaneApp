export const getAgeBasedOnBirthDate = (dateString: string): number => {
  const currentDate = new Date();
  const givenDate = new Date(dateString);
  const diffInMs = currentDate.getTime() - givenDate.getTime();
  const msInYear = 1000 * 60 * 60 * 24 * 365.25;
  const totalYears = Math.floor(diffInMs / msInYear);

  return totalYears;
}
