export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz eposta adresi!';
    case 'auth/email-already-exists':
      return 'Eposta kullanımdadır!';
    case 'auth/invalid-password':
      return 'Geçersiz şifre!';
    case 'auth/wrong-email':
      return 'Yanlış eposta adresi!';
    case 'auth/wrong-password':
      return 'Yanlış şifre!';
    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı!';
    case 'auth/week-password':
      return 'Girdiğiniz parola çok zayıf!';
    default:
      return 'Bir sorun oluştu!' + errorCode;
  }
}
