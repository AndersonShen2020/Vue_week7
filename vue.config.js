module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/Vue-week4/" // 資料夾路徑，儲存庫名稱
      : "/",
};
