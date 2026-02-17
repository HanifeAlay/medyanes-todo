####  Medyanes 360 – Full Stack Todo App  ####

Bu proje, Next.js, MongoDB, Prisma ORM ve Zustand kullanılarak geliştirilmiş fullstack bir Todo uygulamasıdır. Amaç modern bir fullstack mimari kurarak CRUD akışını uçtan uca yönetmektir.


 # Kullanılan Teknolojiler
  • Next.js (Pages Router & API Routes)
  • MongoDB Atlas
  • Prisma ORM
  • Zustand (Global State Management)
  • Tailwind CSS
  • Thunder Client (API testleri)


 # Proje Mimarisi
/components   → UI bileşenleri
/services     → API istek katmanı
/store        → Global state yönetimi
/lib          → Ortak yardımcı dosyalar (Prisma instance)
/pages/api    → Backend API route’ları
/styles       → Global stil dosyaları


# Katmanlı Mimari Yaklaşımı
 • Components: Tekrar kullanılabilir UI parçaları.
 • Services: API çağrılarını merkezi bir noktada toplar.
 • Store (Zustand): Global state yönetimini sağlar.
 • Lib: Prisma instance’ı tek noktadan yönetmek için kullanılır.
 • API Routes: Backend CRUD işlemlerini barındırır.


# Backend Yapısı
   Health Endpoint
       İlk olarak /api/health endpoint’i oluşturularak API katmanının database bağlantısından bağımsız çalıştığı doğrulandı.


# MongoDB Atlas
 • Free Tier cluster oluşturuldu.
 • Database user tanımlandı.
 • Development ortamı için IP whitelist ayarlandı.
 • Connection string güvenlik için .env.local içinde saklandı.


# Prisma ORM
 MongoDB ile doğrudan çalışmak yerine Prisma ORM kullanıldı.

  Avantajları:
    • Schema üzerinden model tanımlama
    •	Tip güvenliği
    •	Düzenli ve sürdürülebilir CRUD yapısı


# Todo Modeli
  Prisma schema üzerinden Todo modeli tanımlandı:
    •	id
    •	title
    •	description
    •	status (Boolean, default: false)
    •	createdAt
    •	updatedAt

   Prisma Client generate edilerek veritabanı bağlantısı doğrulandı.

   Prisma instance tek bir dosyada (lib/prisma.js) oluşturuldu ve API route’larda import edilerek kullanıldı.

 # API Routes – CRUD

   /api/todos endpoint’i üzerinden:
     •	GET → Tüm todoları getirir
     •	POST → Yeni todo oluşturur
     •	PUT → Todo günceller
     •	DELETE → Todo siler

   Her method için HTTP kontrolü yapılmış ve hata yönetimi try/catch bloklarıyla sağlanmıştır.


 # Frontend Yapısı
    Zustand Store
     Global state içinde:
	• todos
	• loading
	• error

     CRUD işlemlerinde:
	1. Önce services üzerinden API çağrısı yapılır.
	2. Sonuç store state’ine yansıtılır.
	3. UI refresh olmadan güncellenir.


 # TodoForm
   • useState ile form verisi tutulur.
   • Submit edildiğinde store’daki addTodo fonksiyonu çağrılır.
   • Başlık zorunlu, açıklama opsiyoneldir.
   • Başarılı işlem sonrası inputlar temizlenir.


 # TodoList & TodoItem
   • Liste map ile render edilir.
   • Her todo ayrı bir component olarak tasarlanmıştır.
   • Checkbox ile status toggle edilir.
   • Delete butonu ile todo silinir.
   • UI state üzerinden otomatik güncellenir.

 # UI
  • Tailwind CSS ile responsive tasarım
  • Soft pembe arka plan
  • Glass-effect kart tasarımı
  • Modern ve sade arayüz yaklaşımı

 # API Testleri
  Thunder Client ile:
   • GET → 200 OK
   • POST → 201 Created
   • PUT → 200 OK
   • DELETE → 200 OK

   CRUD akışı backend seviyesinde ayrıca doğrulanmıştır.



 # Sonuç
  Bu proje ile:
   • Fullstack mimari kurma
   • API route yapısı
   • Prisma ORM ile modelleme
   • MongoDB bağlantı güvenliği
   • Zustand ile global state yönetimi

   konularında pratik deneyim kazanılmıştır.
