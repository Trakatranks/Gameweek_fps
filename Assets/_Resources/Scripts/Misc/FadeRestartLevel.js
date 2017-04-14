#pragma strict
import UnityEngine.SceneManagement;
// FPS KIT [www.armedunity.com]

var secBeforeFade : float = 3.0;
var fadeTime : float = 5.0;
var fadeTexture : Texture;
private var fadeIn : boolean = false;
private var tempTime : float;
private var time : float = 0.0;
var die : AudioClip;

public var player : GameObject;
public var HUD : GameObject;
public var SpawnManager : GameObject;
public var level : GameObject;

public var endScreen : GameObject;

public var scoreManager : GameObject;

protected var hasDied : boolean = false;

function Start(){
	AudioSource.PlayClipAtPoint(die, transform.position);
	yield WaitForSeconds(secBeforeFade);
	fadeIn = true;

	HUD = GameObject.Find("SpawnerManager");
	SpawnManager = GameObject.Find("Level");
	level = GameObject.Find("HUD");
	scoreManager = GameObject.Find("ScoreManager");
}

function Update () {

	if (fadeIn){
		if(time < fadeTime) time += Time.deltaTime;
		tempTime = Mathf.InverseLerp(0.0, fadeTime, time);
	}
	
	if(tempTime >= 1.0 && !hasDied){
		HUD.SetActive(false);
		SpawnManager.SetActive(false);
		level.SetActive(false);
		var lEnd = Instantiate(endScreen);
		gameObject.SetActive(false);
		scoreManager.SendMessage("Die", lEnd);
		hasDied = true;
	}
}

function OnGUI(){
	if(fadeIn){
		GUI.color.a = tempTime;
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), fadeTexture);
	}
}
