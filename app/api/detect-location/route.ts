import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Lấy IP từ header hoặc request
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : request.ip || "unknown";

    let countryCode = "US"; // default
    let country = "United States";
    let city = "";
    let region = "";
    let callingCode = "+1"; // default
    let detectedIp = ip;

    // Kiểm tra nếu IP là localhost hoặc không hợp lệ
    const isLocalhost = 
      !ip || 
      ip === "unknown" || 
      ip === "127.0.0.1" || 
      ip === "::1" || 
      ip.startsWith("192.168.") || 
      ip.startsWith("10.") || 
      ip.startsWith("172.16.") ||
      ip.startsWith("172.17.") ||
      ip.startsWith("172.18.") ||
      ip.startsWith("172.19.") ||
      ip.startsWith("172.20.") ||
      ip.startsWith("172.21.") ||
      ip.startsWith("172.22.") ||
      ip.startsWith("172.23.") ||
      ip.startsWith("172.24.") ||
      ip.startsWith("172.25.") ||
      ip.startsWith("172.26.") ||
      ip.startsWith("172.27.") ||
      ip.startsWith("172.28.") ||
      ip.startsWith("172.29.") ||
      ip.startsWith("172.30.") ||
      ip.startsWith("172.31.");

    // Gọi API ipwho.is để detect location
    try {
      // Nếu là localhost, gọi API không có IP để nó tự detect IP thật của client
      const url = isLocalhost 
        ? `https://ipwho.is/` 
        : `https://ipwho.is/${ip}`;
      
      const res = await fetch(url);
      const data = await res.json();
      
      if (data.success && data.country_code) {
        countryCode = data.country_code;
        country = data.country || country;
        city = data.city || "";
        region = data.region || "";
        // ipwho.is trả về calling_code dạng "1", cần thêm dấu +
        if (data.calling_code) {
          callingCode = `+${data.calling_code}`;
        }
        // Lưu IP thật được detect
        if (data.ip) {
          detectedIp = data.ip;
        }
      }
    } catch (apiError) {
      console.error("Location API error:", apiError);
      // Fallback to default
    }

    return NextResponse.json({
      success: true,
      countryCode,
      ip: detectedIp,
      country,
      city,
      region,
      callingCode,
    });
  } catch (error) {
    console.error("Detect location error:", error);
    return NextResponse.json({ success: false, countryCode: "US", ip: "unknown" });
  }
}
