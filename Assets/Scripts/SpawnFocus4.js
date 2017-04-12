#pragma strict

var EnemyFocus : GameObject;
var Player : Transform;
var scoreManager : GameObject;

private var numEnemy = 0;
private var timer=0;
private var decreaseTimer=0;

var delayMax=100;
var delayMin=0;
var timeBeforeDecreaseDelay : float = 10.0f;;
private var delay : float;

function Start () {
    delay = Random.Range(delayMin, delayMax);
    
}

function DelaySpawn()
{
    timer++;
	decreaseTimer++;

	if(decreaseTimer  > timeBeforeDecreaseDelay * 60.0f && delayMin > 0){
		delayMax -= 5.0f;
		delayMin -= 5.0f;
		decreaseTimer = 0;
	}


    if(timer>delay) 
    {
        delay = Random.Range(delayMin, delayMax);
        var lRef : GameObject;
        lRef=Instantiate(EnemyFocus);
        lRef.transform.position = transform.position;
        lRef.GetComponent(BehaviourFocus).Player=Player;
		lRef.GetComponent(BehaviourFocus).scoreManager=scoreManager;
        timer=0;
                 
        numEnemy++;
    }
        
}

function Update () {

    DelaySpawn();
	
}
