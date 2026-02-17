

// Bu fonksiyon /api/health adresine gelen tüm http istekleri yakalar
export default function handler(req, res) {
    return res.status(200).json({  // HTTP 200 kodu gönderir  .json Yanıtı JSOn formatına döndürür.
        ok: true,  // sistem çalışıyor bilgisini gönderiyoruz
        message: "API is running", 
    })
}