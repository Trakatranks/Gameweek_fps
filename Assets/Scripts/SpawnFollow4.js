#pragma strict

var EnemyFollow : GameObject;
var EnemyFollowFast : GameObject;
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

		var enemy = Mathf.Floor(Random.Range(0f, 2f));

		if(enemy == 0){
			lRef=Instantiate(EnemyFollow);
		}
		else if(enemy == 1){
			lRef=Instantiate(EnemyFollowFast);
		}
       
        lRef.transform.position = transform.position;
        lRef.GetComponent(BehaviourFollow).Player=Player;
		lRef.GetComponent(BehaviourFollow).scoreManager=scoreManager;

        timer=0;
                 
        numEnemy++;
    }
        
}

function Update () {

    DelaySpawn();
	
}

