# Portfolyo arayüzü — uygulama sırası

Amaç: Necmettin Zivlak için, bir insanın da bir firmanın da 30 saniyede okuyabildiği portfolyo. Merkezde duran uzun paragraf, aynı kartlar ve ikon ızgarası kalkar. Yerine sol hizalı, satır satır taranan bir dizin gelir.

İlke: Uydurma metrik yok. Sadece CV’de duran işler, şirketler, süreler ve yığın. E-posta `zivlaknecmettin@gmail.com`. Dört dil (en, tr, de, az) aynı iskeleti kullanır.

Görünüm: sıcak kâğıt zemin, mürekkep metin, başlıklarda serif (Newsreader), gövdede Outfit. Koyu tema aynı düzenin mürekkep hali. Zıplayan kart, gradyan şerit ve dış ikon CDN’i yok.

---

## 1. Temel

### 1.1 Renk ve yazı
- Açık tema varsayılan kimliktir. `html` üzerindeki zorunlu `dark` sınıfı kalkar; tema anahtarı gerçekten çalışır.
- Tek vurgu: küçük bir mürekkep/pirinç işareti. Butonlar düz, gölgesiz.
- Başlıklar `font-serif`, arayüz metni Outfit.

### 1.2 Veri
- `lib/portfolio.ts`: profil, iş dizini, alan (piyasa, operasyon, ticaret, platform), şirket bağlamı, öne çıkan dört iş, yetenek grupları.
- Metinler `messages/*.json` içinde kalır. Yeni anahtarlar dört dilde birden eklenir.

### 1.3 Kabuk
- Üst çubuk: ad, İş, Deneyim, İletişim, dil kodları, tema.
- Alt bilgi: rol, e-posta, yıl.
- İç sayfalarda aynı sayfa başlığı: küçük etiket, serif başlık, tek cümle.
- `main#content` ve klavyeden görünen “içeriğe geç”.

## 2. Ana sayfa

### 2.1 Kimlik
- Ad iki satır, serif, büyük.
- Tek paragraf: fintech, canlı filo, ticaret; React, Next.js, TypeScript, Flutter.
- Yan sütun: Türkiye, 3+ yıl, fırsatlara açık, iki eylem (işler, iletişim).

### 2.2 Kanıt şeridi
- Dört hücre: odak, alanlar, yığın, diller. Rakam uydurulmaz.

### 2.3 Seçili iş — 01
- Dört satır: Marduk Finance, Ulak, Tahsildar, Alliveri.
- Her satır: numara, ad, açıklama, alan, şirket, etiketler.
- Satır, projeler sayfasındaki çapaya gider.
- “Tüm dizin” bağlantısı.

### 2.4 Deneyim — 02
- Ana sayfada üç rol, yalnız şirket, unvan, süre: Marduk, Yerlem, Stechome.
- Tam metin deneyim sayfasında.

### 2.5 Yetenek — 03
- Dört sütun metin: frontend, mobil, backend, araçlar. Logo ızgarası yok.

### 2.6 Arka plan — 04
- Eğitim: Anadolu Üniversitesi, Konya Teknik Üniversitesi.
- Diller: Türkçe anadil, İngilizce profesyonel.

### 2.7 Kapanış
- Kısa çağrı ve e-posta. Form iletişim sayfasında.

## 3. İş dizini

### 3.1 Süzgeç
- Tümü, Piyasa, Operasyon, Ticaret, Platform. Seçim sayfa içinde kalır.

### 3.2 Satırlar
- Yirmi iş, ana sayfadaki satır düzeniyle. Canlı demo yoksa sahte bağlantı konmaz.
- Sıra: piyasa, operasyon, ticaret, platform.

## 4. Deneyim sayfası

### 4.1 Kayıt
- Beş durak: Marduk, Yerlem, Stechome, Terra, bağımsız işler.
- Solda süre, sağda şirket, unvan, mevcut açıklama.

## 5. İletişim

### 5.1 Doğrudan kanal
- E-posta büyük ve kopyalanabilir bir bağlantı.
- GitHub ve LinkedIn metin bağlantısı. Doğrulanmamış Twitter öne çıkarılmaz.

### 5.2 Form
- İsim, e-posta, mesaj. Hata ve başarı metinleri dile bağlı.
- Gönderim davranışı aynı kalır; sadece arayüz ve hata kodu değişir.

## 6. Kenar durumlar

### 6.1 404
- Aynı tipografi. Ana sayfaya dönüş.

### 6.2 Üst veri ve ikon
- Başlık ve açıklama yeni cümleye çekilir.
- Favicon mor gradyan yerine düz NZ monogramı.

## 7. Kontrol

### 7.1 Masaüstü ve mobil
- Ana sayfa, işler, deneyim, iletişim ve 404.
- Dil değişimi ve tema anahtarı.
- İş süzgeci ve form doğrulaması.
