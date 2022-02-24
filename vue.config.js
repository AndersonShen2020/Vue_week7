module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/Vue_week6/" // 資料夾路徑，儲存庫名稱
      : "/",
};
