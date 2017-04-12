#pragma strict

var EnemyFollow : GameObject;
var Player : Transform;
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
        lRef=Instantiate(EnemyFollow);
        lRef.transform.position = transform.position;
        lRef.GetComponent(BehaviourFollow).Player=Player;
        timer=0;
                 
        numEnemy++;
    }
        
}

function Update () {

    DelaySpawn();
	
}

