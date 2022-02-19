module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/Vue_week5/" // 資料夾路徑，儲存庫名稱
      : "/",
};
