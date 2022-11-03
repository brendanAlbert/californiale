function guid() {
    const characters =
        "1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+=ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let guid = "";
    while (guid.length < 26) {
        guid = guid + characters[Math.floor(Math.random() * characters.length)];
        if (guid.length % 7 == 0) {
            guid = guid + "-";
        }
    }
    return guid;
}

console.log(guid());
