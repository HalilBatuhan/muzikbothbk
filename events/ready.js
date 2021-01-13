module.exports = async (client) => {//youtube/NoblesYT
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Youtube/NoblesYT", { //Oynuyor Kısmı
    type: "WATCHING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};