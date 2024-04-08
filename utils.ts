export const getCurrentColor = (angle: number) => {
  const currentAngle = angle % 360;
  let color = '';
  if (currentAngle < 60) {
    color = 'SkyBlue';
  } else if (currentAngle < 120) {
    color = 'Green';
  } else if (currentAngle < 180) {
    color = 'Yellow';
  } else if (currentAngle < 240) {
    color = 'Purple';
  } else if (currentAngle < 300) {
    color = 'DarkOrange';
  } else {
    color = 'Orange';
  }
  return color;
};

export const WinningInfo = [
  {color: 'SkyBlue', index: 0, win: '5000 RS'},
  {color: 'Green', index: 0, win: '0 RS'},
  {color: 'Yellow', index: 0, win: '100 RS'},
  {color: 'Purple', index: 0, win: '200 RS'},
  {color: 'DarkOrange', index: 0, win: '10,000 RS'},
  {color: 'Orange', index: 0, win: '500 RS'},
];
