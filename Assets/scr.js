#pragma strict

var canvas : Transform;
var txtScor : Transform;
var nbScore : Transform;

function UpdateScore(score : int) {
	//print(score);
	canvas = transform.Find("Canvas");
	txtScor = canvas.transform.Find("txt_score");
	nbScore = txtScor.transform.Find("nbr_score");
	//var txtRef = nbScore
	nbScore.gameObject.GetComponent(Text).text = ""+score;

	yield WaitForSeconds(5.0f);
	UnityEngine.SceneManagement.SceneManager.LoadScene("titleScreen");
}
