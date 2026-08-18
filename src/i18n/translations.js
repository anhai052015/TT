const translations = {
  vi: {
    // App.js screen titles
    homeTitle: "Cảnh Báo Động Đất",
    mapTitle: "Bản đồ Tâm chấn",
    detailTitle: "Chi tiết Động đất",
    searchTitle: "Tra cứu Lịch sử",

    // HomeScreen
    loadingData: "Đang tải dữ liệu động đất...",
    bannerTitle: "Cảnh báo động đất",
    bannerSubtitle: "Nguồn EMSC • Cập nhật mỗi phút",
    btnMap: "🗺️ Bản đồ tâm chấn",
    btnSearch: "🔍 Tra cứu lịch sử",
    alertPermissionTitle: "Cảnh báo",
    alertPermissionMsg: "Bạn cần cấp quyền vị trí để ứng dụng tính khoảng cách!",

    // MapScreen
    calculatingDistance: "Đang tính khoảng cách...",
    distanceFromYou: "Cách bạn: {{distance}} km",
    magnitudeLabel: "Độ lớn: {{mag}} Richter",
    tapForDetail: "Bấm xem chi tiết >",

    // DetailScreen
    detailParams: "Thông số chi tiết",
    richter: "Richter",
    depthLabel: "Độ sâu tâm chấn",
    distanceLabel: "Khoảng cách",
    timeLabel: "Thời gian",
    eventIdLabel: "Mã sự kiện",
    unknownRegion: "Không rõ khu vực",

    // SearchScreen
    filterTitle: "Bộ lọc tra cứu",
    fromDate: "Từ ngày",
    toDate: "Đến ngày",
    minMagnitude: "Độ lớn tối thiểu (Richter)",
    searchBtn: "Tìm kiếm",
    noData: "Không tìm thấy dữ liệu phù hợp.",
    placeholderMag: "vd: 5.0",

    // EarthquakeCard
    locationUnknown: "Vị trí của bạn chưa xác định",
    distanceFromYouCard: "Cách bạn {{distance}} km",
  },

  en: {
    // App.js screen titles
    homeTitle: "Earthquake Alert",
    mapTitle: "Epicenter Map",
    detailTitle: "Earthquake Detail",
    searchTitle: "History Search",

    // HomeScreen
    loadingData: "Loading earthquake data...",
    bannerTitle: "Earthquake Alert",
    bannerSubtitle: "Source: EMSC • Updates every minute",
    btnMap: "🗺️ Epicenter Map",
    btnSearch: "🔍 Search History",
    alertPermissionTitle: "Warning",
    alertPermissionMsg: "Location permission is required to calculate distance!",

    // MapScreen
    calculatingDistance: "Calculating distance...",
    distanceFromYou: "Distance: {{distance}} km",
    magnitudeLabel: "Magnitude: {{mag}} Richter",
    tapForDetail: "Tap for details >",

    // DetailScreen
    detailParams: "Detailed Parameters",
    richter: "Richter",
    depthLabel: "Epicenter Depth",
    distanceLabel: "Distance",
    timeLabel: "Time",
    eventIdLabel: "Event ID",
    unknownRegion: "Unknown Region",

    // SearchScreen
    filterTitle: "Search Filters",
    fromDate: "From date",
    toDate: "To date",
    minMagnitude: "Minimum Magnitude (Richter)",
    searchBtn: "Search",
    noData: "No matching data found.",
    placeholderMag: "e.g. 5.0",

    // EarthquakeCard
    locationUnknown: "Your location is not determined",
    distanceFromYouCard: "{{distance}} km from you",
  },

  zh: {
    // App.js screen titles
    homeTitle: "地震警报",
    mapTitle: "震中地图",
    detailTitle: "地震详情",
    searchTitle: "历史查询",

    // HomeScreen
    loadingData: "正在加载地震数据...",
    bannerTitle: "地震警报",
    bannerSubtitle: "数据来源: EMSC • 每分钟更新",
    btnMap: "🗺️ 震中地图",
    btnSearch: "🔍 搜索历史",
    alertPermissionTitle: "警告",
    alertPermissionMsg: "需要位置权限才能计算距离！",

    // MapScreen
    calculatingDistance: "正在计算距离...",
    distanceFromYou: "距您: {{distance}} 公里",
    magnitudeLabel: "震级: {{mag}} 里氏",
    tapForDetail: "点击查看详情 >",

    // DetailScreen
    detailParams: "详细参数",
    richter: "里氏",
    depthLabel: "震源深度",
    distanceLabel: "距离",
    timeLabel: "时间",
    eventIdLabel: "事件编号",
    unknownRegion: "未知区域",

    // SearchScreen
    filterTitle: "搜索筛选",
    fromDate: "开始日期",
    toDate: "结束日期",
    minMagnitude: "最小震级 (里氏)",
    searchBtn: "搜索",
    noData: "未找到匹配数据。",
    placeholderMag: "例如: 5.0",

    // EarthquakeCard
    locationUnknown: "尚未确定您的位置",
    distanceFromYouCard: "距您 {{distance}} 公里",
  },
};

export default translations;
