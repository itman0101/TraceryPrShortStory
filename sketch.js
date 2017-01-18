var story = {
/*  "start":"#[hero:#char#]story#",
  "char":["dragon","rainbow","popcorn"],
  "story":"A #adj# #hero# fights the #adj# monster . Go #hero# go!",
  "adj":["dark","sleepy","nice","romantic","rainy","windy"]
  */
  /*
  "name":["اکبر","مهدی","علی","آرمان","هادی","حسین","احمد " ,"جعفر","سیامک","امید"],
  "animal":["گرگ","روباه","کلاغ","خرس","شیر","پلنگ"],
  "occupationBase":["دانشجو","استاد","لوله کش","مهندس","برنامه نویس ","طراح وب","زیست شناس"],
  "occupationMod":["حرفه ای","ماهر","کاربلد","به دردنخور","غیر ماهر"],
  "strange":["ترسناک","بهت انگیز","سحرآمیز","مسخره","رمانتیک"],
  "tale": ["قصه","افسانه","رمان","حکایت","داستان"],
  "occupation": ["#occupationMod##occupationBase#"],
  "mood":["رنجیده","عصبانی","اوقات تلخ","خوش اخلاق","بی حوصله"," بی اعصاب"],
  "setPronouns": ["[قهرمان آن:آن][heroThem:them][heroTheir:their][heroTheirs:theirs]","[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]",
  "[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"],
  "setSailForAdventure": ["set sail for adventure","left #heroTheir# home","set out for adventure","went to seek #heroTheir# forture"],
  "setCharacter": ["[#setPronouns#][hero:#name#][heroJob:#occupation#]"],
  "openBook": ["An old #occupation# told #hero# a story. 'Listen well' she said to #hero#, 'to this #strange# #tale#. ' #origin#'","#hero# went home.",
  "#hero# found an ancient book and opened it.  As #hero# read, the book told #strange.a# #tale#: #origin#"],

  "story": ["#hero# the #heroJob# #setSailForAdventure#. #openBook#"],

  "origin": ["روزی روزگاری, #[#setCharacter#]story#"]
  */
  "name": ["Akbar","Mahdi","Ali","Hossien","Hadi","Arman","Sahand","Omid"],
  "animal": ["gorg","robah","khers","parvaneh","magas","ogab","jogd","marmolak","khar","ordak","asb"],

	"occupationBase": ["[jadogar]","karagah","bazras","raggas","jenayatkar","dozde daryai","chob shekan","jasos","doctor","daneshmand","captain","daneshjo"],

	"occupationMod": ["makhfi ","fazaii ","herfeeii ","asilzadeh ","asheg ","mozi ","majazi","gadimi ","fanni","gondeh"],
	"strange": ["razalod","badyomn","delroba","ajib","tarsnak"],
	"tale": ["gesseh","roman","hekayat","lafsaneh"],
	"occupation": ["#occupationBase# #occupationMod#"],
	"mood": ["ranjideh","bihosele","moshtag","zirak","ba adab"],
	"setPronouns": ["[heroThey:Anha][heroTheir:an]","[heroThey:oo]"],
	"setSailForAdventure": ["badban ra baraye majerajoii andakht","be jangle #strange# raft","bal baraye parvaz da asmane #strange# goshod","dar khaneh #heroTheir# mand","baraye majerajoii biron zad","baraye jostojo raft #heroTheir# be shahr"],
	"setCharacter": ["[#setPronouns#][hero:#name#][heroJob:#occupation#]"],
	"openBook": ["yek #occupation# pir baraye #hero# yek dastan tarif kard. 'khob gosh kon' be #hero# goft, 'be in #tale# #strange# . ' #origin#'","#hero# be khaneh raft.","#hero# yek ketab gadimi payda kard va an ra baz kard.  hamantori ke #hero# khand, ketab yek #tale# #strange.a#: #origin# tarif mikard"],
	"story": ["#hero#  #heroJob# #setSailForAdventure#. #openBook#"],
	"origin": ["rozi rozgari, #[#setCharacter#]story#"],

}


function setup() {
  noCanvas();
  grammar = tracery.createGrammar(story);
  var result = grammar.flatten("#origin#");
  console.log(result);
  document.write(result);
}
