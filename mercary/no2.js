/*
 * Complete the 'jumps' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER flagHeight
 *  2. INTEGER bigJump
 */

function jumps(flagHeight, bigJump) {
  // Write your code here
  let bigJumpTotal = Math.floor(flagHeight / bigJump);

  return bigJumpTotal + (flagHeight % bigJump);
}
