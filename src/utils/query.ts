export function createQueryFromObject(obj: Record<string, any>) {
  return (
    "?" +
    Object.keys(obj)
      .reduce<string[]>((acc, curr) => {
        const v = encodeURIComponent(obj[curr]);
        acc.push(curr + "=" + v);
        return acc;
      }, [])
      .join("&")
  );
}
