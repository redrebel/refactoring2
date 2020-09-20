class OutStream {
  write(arg) {
    console.log(arg.replace("\n", ""));
  }
}

module.exports = OutStream;
