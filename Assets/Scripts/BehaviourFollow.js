#pragma strict

var Player : Transform;
private var timer = 0;
var timeMax = 0;

var explosion : GameObject;
var scoreManager : GameObject; 
private var activated : boolean = false;

var moveSpeedMax : float = 0;
var moveSpeedMin : float =0;
private var moveSpeed : float;

private var height : float = 1.60;

private var amplitude : float = 0;
var amplitudeMin : float = 0;
var amplitudeMax : float = 0;

private var period : float = 0;
var periodMin : float = 0;
var periodMax : float = 0;
 
private var touch = false;

public class BehaviourFollow extends EnemyManager{

function Start () 
{
    moveSpeed = Random.Range(moveSpeedMin, moveSpeedMax);
    getTarget();
}
 
function getTarget()
{
	transform.LookAt(Player);
}

function Update () 
{
    timer++;
    if(timer>=timeMax){
        getTarget();
        timer=0;
    }
  
    transform.position += transform.forward*moveSpeed*(Time.deltaTime);  
}

//________________EXPLOSION__________________________________________________
function OnTriggerEnter (other : Collider) { 
    if (other.CompareTag ("Player")) 
        Explosion();
}

    function ApplyDamage(){

	
		var lTest = scoreManager.GetComponent(ScoreManager);
		//lTest.DrawCrosshair();
		lTest.addScore(1);

        yield WaitForSeconds(.3);
        Explosion();
    }


    function Explosion(){
		super();
        if(activated) return;
        activated = true;

        Instantiate (explosion, transform.position, transform.rotation);
        Destroy(gameObject);
    }

	override function Destroy(){
		super();
	}


}
