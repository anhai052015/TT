// Bảng màu dùng chung cho toàn app - phong cách tối giản, chuyên nghiệp
export const COLORS = {
  primary: "#1f4e79",
  primaryDark: "#163a5c",
  accent: "#2f6fb2",
  bg: "#f2f5f8",
  card: "#ffffff",
  border: "#e3e9ef",
  text: "#1f2a36",
  textSecondary: "#5f6f7e",
  textMuted: "#93a1b1",
  white: "#ffffff",
};

// Màu hiển thị theo cấp độ động đất (Richter)
export function getMagColor(mag) {
  if (mag >= 6.5) return "#9b1c3a";
  if (mag >= 5.5) return "#d64545";
  if (mag >= 4.5) return "#e0912a";
  return "#7b8a99";
}
