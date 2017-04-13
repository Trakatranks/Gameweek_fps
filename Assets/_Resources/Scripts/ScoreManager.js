import UnityEngine.UI;

#pragma strict
// FPS KIT [www.armedunity.com]

@header("UI TEXT")
public var score_txt : Text;
public var multiply_txt : Text;

@header("VICTORY SCREEN")
public var score_victory : Text;
public var bestCombo_victory : Text;
public var nbrCombo_victory : Text;

var currentScore : float = 0.0f;
var newScore : float = 0.0f;
var timer : int = 500;
var combo : float = 0.0f;
var bestCombo :  float = 0.0f;
var countCombo : int = 0;
var nbrCombo : float = 0.0f;
var multiplyCombo : float = 0.0f;

var hitCrosshairTexture : Texture;
private var alphaHit : float;
var hitSound : AudioClip;
	
var mySkin : GUISkin;
	
var pointsToNextRank : int = 50;
var lvl : int = 0;
var levelUpSound : AudioClip;
private var playerDead : boolean = false;
var aSource : AudioSource;

function Start(){
    if (score_txt != null) score_txt.text = "" + currentScore;
    if (multiply_txt != null) multiply_txt.text = "" + multiplyCombo;
    if (score_victory != null) score_victory.text = "" + currentScore;
    if (bestCombo_victory != null) bestCombo_victory.text = "" + bestCombo;
    if (nbrCombo_victory != null) nbrCombo_victory.text = "" + countCombo;
}

function Update () {
	if (alphaHit > 0) 
	    alphaHit -= Time.deltaTime;

	if (timer <= 0) {
	    if (nbrCombo > bestCombo) bestCombo = nbrCombo;
	    multiplyCombo = 1 + (nbrCombo / 100.0f);
	    addRealScore(newScore, multiplyCombo);
	    newScore = 0.0f;
	    nbrCombo = 0.0f;
	    countCombo++;
	    multiplyCombo = 0.0f;
	    if (multiply_txt != null) multiply_txt.text = "" + multiplyCombo;
	}else{
	    timer--;
	}
}

function DrawCrosshair(){
	yield WaitForSeconds(0.05);
	alphaHit = 1.0;
	aSource.PlayOneShot(hitSound, 0.2);
}

function addRealScore(val : int, mult : int){
    currentScore += (val * mult);
    
    if (score_txt != null) score_txt.text = "SCORE : " + currentScore;

	if(currentScore >= pointsToNextRank){
		lvl++;
		aSource.PlayOneShot(levelUpSound, 0.2);	
		pointsToNextRank += currentScore;
	}
}

function setTimer(){
    timer = 500;
    nbrCombo++;
    if (multiply_txt != null) multiply_txt.text = "" + multiplyCombo;
}

function addScore(val : int){
    newScore += val;
    multiplyCombo = 1 + (nbrCombo / 100.0f);
    setTimer();
}

function PlayerDead(){
	playerDead = true;
}

function OnGUI(){
	if(playerDead) return;

    /*
	GUI.skin = mySkin;
	GUI.depth = 2;
	
	GUI.Label (Rect(40, Screen.height - 80,100,60)," SCORE :");
	GUI.Label (Rect(100, Screen.height - 80,160,100),"" + currentScore, mySkin.customStyles[0]);
	
	GUI.Label (Rect(40, Screen.height - 110,100,60)," LVL :");
	GUI.Label (Rect(100, Screen.height - 110,160,60),"" + lvl, mySkin.customStyles[0]);

	GUI.Label (Rect(40, Screen.height - 200,100,60)," NBR COMBO :");
	GUI.Label (Rect(100, Screen.height - 200,300,100),"" + nbrCombo, mySkin.customStyles[0]);

	GUI.Label (Rect(40, Screen.height - 300,100,60)," TIME RESTANT AVANT RESET DU COMBO :");
	GUI.Label (Rect(100, Screen.height - 300,500,100),"" + (timer / 60), mySkin.customStyles[0]);

	GUI.Label (Rect(40, Screen.height - 400,100,60)," BOOST COMBO :");
	GUI.Label (Rect(100, Screen.height - 400,300,100),"" + (nbrCombo / 100), mySkin.customStyles[0]);
	
	GUI.color = Color(1.0, 1.0, 1.0, alphaHit);
	GUI.DrawTexture (Rect ((Screen.width /2) - 16, (Screen.height/2) - 16, 32, 32), hitCrosshairTexture);
    */
}	