export const localizeSex = (sex: string): string => {
  switch (sex) {
    case "male":
      return "муж.";
    case "female":
      return "жен.";
    default:
      return "неизвестный...";
  }
};
