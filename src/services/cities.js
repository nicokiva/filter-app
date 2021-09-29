export const get = async () => {
    const response = await fetch('http://localhost:3030/cities?limit=30');
    if (!response.ok) {
        throw new Error("Error getting cities");
    }

    const { data, links, total } = await response.json();
    console.log(data, links, total);
    return { data };
};