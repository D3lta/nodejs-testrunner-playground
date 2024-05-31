
function meow(nyans = 1) {
    if (!Number(nyans) || nyans <= 0) throw new Error("nyans is not a number");
    return Array(nyans).fill("meow").join(" ");
}

export { meow }