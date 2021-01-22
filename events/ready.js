module.exports = async (client) => {//youtube/NoblesYT
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("youtube 𝖖𝖚𝖆𝖗𝖙𝖊𝖝", { //Oynuyor Kısmı
    type: "WATCHING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};