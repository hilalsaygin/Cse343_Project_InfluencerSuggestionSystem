const Tour = require('./../models/tours');



const tours =  Tour.find({});

exports.checkUsername = async (req, res, next, val) => {
  try {
    // Veritabanında belirtilen username ile bir tur bul
    const tour = await Tour.findOne({ username: val });
    // Eğer tur bulunamazsa, hata mesajı döndür
    if (!tour) {
      return res.status(404).json({
        status: 'fail',
        error: 'Tour not found'
      });
    }
    // Eğer tur bulunursa, turu isteğe ekle ve işleme devam et
    req.tour = tour;
    next();
  } catch (err) {
    // Eğer bir hata oluşursa, hata mesajı döndür
    return res.status(400).json({
      status: 'fail',
      error: err
    });
  }
};
exports.getPopular = async (req, res) => {
  try {
    // Verileri al
    const tours = await Tour.find({}, {
      _id: 0,
      username: 1,
      website: 1,
      name: 1,
      biography: 1,
      followers_count: 1,
      follows_count: 1,
      media_count: 1,
      profile_picture_url: 1,
      IGI: 1,
      'top_media.caption': 1,
      'top_media.media_url': 1,
      'top_media.like_count': 1,
      'top_media.comments_count': 1,
      'top_media.IGI_media': 1

    }).limit(10);
    
    // Yanıtı gönder
    res.status(200).json({
      status: 'success',
      data: {
        tours
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getAllTours = async (req, res) => {
  try {
    // Verileri al
    const tours = await Tour.find({}, {
      _id: 0,
      username: 1,
      website: 1,
      name: 1,
      biography: 1,
      followers_count: 1,
      follows_count: 1,
      media_count: 1,
      profile_picture_url: 1,
      IGI: 1,
      'top_media.caption': 1,
      'top_media.media_url': 1,
      'top_media.like_count': 1,
      'top_media.comments_count': 1,
      'top_media.IGI_media': 1

    });
    
    // Yanıtı gönder
    res.status(200).json({
      status: 'success',
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    // Turun ID'sini al
    const username = req.params.username;

    // Veritabanından turun verilerini al
    const tour = await Tour.findOne({ username }, {
      _id: 0,
      username: 1,
      website: 1,
      name: 1,
      biography: 1,
      followers_count: 1,
      follows_count: 1,
      media_count: 1,
      profile_picture_url: 1,
      IGI: 1,
      'top_media.caption': 1,
      'top_media.media_url': 1,
      'top_media.like_count': 1,
      'top_media.comments_count': 1,
      'top_media.IGI_media': 1
    });

    // Eğer tur bulunamazsa, hata mesajı döndür
    if (!tour) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
      });
    }

    // Eğer tur bulunursa, verileri döndür
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    // Eğer hata oluşursa, hata mesajı döndür
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
exports.createTour = async (req, res) => {
  try {
    // Yeni bir tur dokümanı oluştur
    const newTour = new Tour(req.body);

    // Yeni tur dokümanını veritabanına kaydet
    await newTour.save();

    // Yanıtı gönder
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    // Eğer hata oluşursa, hata mesajı döndür
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
exports.updateTour = async (req, res) => {
  try {
      const result = await Tour.find({})
      .sort('-IGI_point');
      await Tour.deleteMany();
      await Tour.insertMany(result);
    res.status(200).json({
      status: 'success',
      data: {
        tour: 'Data successfully updated!'
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: err
    });
  }
};

exports.deleteTour = async (req, res) => {
  // Kullanıcı adını al
  const username = req.params.username;

  // Veritabanından kullanıcı adına sahip turun verilerini al
  const tour = await Tour.findOne({ username });
  Tour.findByIdAndDelete(tour._id, (err, tour) => {
    if (err) {
      return res.status(400).json({
        status: 'fail',
        error: err
      });
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  });
};


exports.getToursByCategory = async (req, res) => {
  try {
    // Kategorileri al
    const categories = req.query.categories.split(',');

    // Veritabanından seçilen kategorilere göre influencerleri al
    const tours = await Tour.find({ category: { $in: categories } }, {
      _id: 0,
      username: 1,
      website: 1,
      name: 1,
      biography: 1,
      followers_count: 1,
      follows_count: 1,
      media_count: 1,
      profile_picture_url: 1,
       IGI: 1,
      'top_media.caption': 1,
      'top_media.media_url': 1,
      'top_media.like_count': 1,
      'top_media.comments_count': 1,
      'top_media.IGI_media': 1
    });

    // Eğer influencerler bulunamazsa, hata mesajı döndür
    if (!tours) {
      return res.status(404).json({
        status: 'fail',
        message: 'No tours found'
      });
    }

    // Eğer influencerler bulunursa, verileri döndür
    res.status(200).json({
      status: 'success',
      data: {
        tours
      }
    });
  } catch (err) {
    // Eğer hata oluşursa, hata mesajı döndür
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};