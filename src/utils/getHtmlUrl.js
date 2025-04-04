const getHtmlUrl = async (url) => {
  const res = await fetch(url);

  if (!res.ok) throw new Error("network error");

  return await res.text();
};

export default getHtmlUrl;
