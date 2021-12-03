/*Burası Dom etiketleri ile html ıdlerini js te kullanabilmek için 
değişken atadıgımız kısım */



const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email")
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

/*addEventListener
form elementinin içindeki submit tıklandıgı zaman çağırılan işlemdir.

event.preventDefault()
Bir diğer durum ise HTML elementlerinin mevcut eylemlerini engelleme isteğidir.
Örneğin bir link tıklandığında doğrudan linkin gösterdiği adrese yönlendirme yapılır.
Ancak link tıklandığında bu eylemin engellenmesi gerekiyor ise event.preventDefault();
 metodu kullanılabilir
 buradaki kullanım amacımız submite basıldıgında formu yenilenmesini engellemektir.

 checkInputs() ile Aşagıda oluşturdugumuz fonksiyonu çağırıyoruz
  */
form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
});

/*checkInputs adında bir arrow fonksiyon oluşturuyoruz
modern js te arrow fonksiyon tercih ediliyor

 */
/*username.value "value" textinin içindeki yazılara ulaşmak için kullandık
 const usernameValue = username.value ile  bu yazıları değişkene atadık 
 .trim ile text inputuna girilen boşlukları geçersiz kıldık
 örnek:
 kullanıcı adı:         berkcan
 alınan deger:         berkcan   
 .trim ile alınan değer:berkcan
 boşlukları geçersiz kıldık
 */
const checkInputs = () => {

    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    /*eğer usernameValuenin içi boş ise 
    setErrorFor(username, 'Lütfen kullanıcı adı giriniz')  fonksiyonunu çalıştır  
    degilse
     setSuccesFor(username) çalıştır  */
    

    if (usernameValue === '') {
        setErrorFor(username, 'Lütfen kullanıcı adı giriniz')


    } else {
        setSuccesFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Lütfen email adresi giriniz')
    }
    else {
        setSuccesFor(email)
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Lütfen şifre giriniz')
    }
    else {
        setSuccesFor(password)
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Lütfen tekrar şifre giriniz')
    }
    else {
        setSuccesFor(password2)
    }







}
/*formControl değişkenini inputun ebeveyn elementi çağırma olan parentElement ile inputun
<div class="form-control "> form-control classına erişim sağlıyoruz
buradan form-control error classını istedigimiz zaman çağırmak için formControl 
degiskenine atıyoruz
small etiketinin içindeki innertexti message degiskenine atadık */

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error ';
    small.innerText = message;

}
/* *formControl değişkenini inputun ebeveyn elementi çağırma olan parentElement ile inputun
    <div class="form-control "> form-control classına erişim sağlıyoruz
    buradan form-control succes classını istedigimiz zaman çağırmak için formControl 
    degiskenine atıyoruz*/
function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control succes';

}


