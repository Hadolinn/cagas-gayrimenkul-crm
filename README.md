# Çağdaş Gayrimenkul İnşaat - CRM

Modern ve kullanıcı dostu bir emlak CRM uygulaması.

## Özellikler

- **Portföy Yönetimi**: İlan ekleme, düzenleme, silme
- **Müşteri Yönetimi**: Müşteri kayıtları ve takibi
- **WhatsApp Entegrasyonu**: Tek tıkla WhatsApp üzerinden iletişim
- **Telefon Numarası Arama**: İlanları telefon numarasıyla arama
- **Filtreleme**: İlan tipi ve duruma göre filtreleme
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Local Storage**: Veriler tarayıcıda saklanmakta (sunucusuz)
- **Düşük KB Fotoğraf Desteği**: Portföy kartlarında optimize edilmiş görseller

## Kurulum

1. Bu repoyu klonlayın:
```bash
git clone https://github.com/kullaniciadi/cagas-gayrimenkul-crm.git
```

2. Proje dizinine gidin:
```bash
cd cagas-gayrimenkul-crm
```

3. `index.html` dosyasını tarayıcıda açın veya bir yerel sunucu kullanın:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

4. Tarayıcıda `http://localhost:8000` adresini açın.

## GitHub Pages ile Yayınlama

1. Reponuzu GitHub'a gönderin
2. Repository ayarlarından GitHub Pages bölümüne gidin
3. Source olarak `main` branch'ini seçin
4. Siteniz `https://kullaniciadi.github.io/cagas-gayrimenkul-crm/` adresinde yayınlanacaktır

## Kullanım

- **Sol menüden** sayfalar arasında geçiş yapın
- **"İlan Ekle"** sayfasından yeni portföy ekleyin
- **Arama kutusuna** telefon numarası yazarak ilan arayın
- **Portföy kartına tıklayarak** detayları görüntüleyin
- **WhatsApp butonu** ile doğrudan iletişim kurun

## Teknolojiler

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.5.1 (CDN)
- Local Storage API

## Lisans

Bu proje özel mülkiyettir. Tüm hakları saklıdır.
