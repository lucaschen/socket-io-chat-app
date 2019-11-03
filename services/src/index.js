import socketIO from "socket.io";

const PORT = 5000;

const io = socketIO(PORT);

io.on("connection", function(socket) {
  console.log("Connection established!");

  socket.on("newChatMessage", data => {
    io.emit("newChatMessage", data);
  });

  socket.on("disconnect", function() {
    console.log("Disconnected!");
  });
});

console.log(`Server listening on ${PORT}`);
