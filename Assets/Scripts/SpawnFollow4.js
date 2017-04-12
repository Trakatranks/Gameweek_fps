#pragma strict

var EnemyFollow : GameObject;
var Player : Transform;
private var numEnemy = 0;
private var timer=0;

var delayMax=100;
var delayMin=0;
private var delay : float;

function Start () {
    delay = Random.Range(0.0, 100.0);
    
}

function DelaySpawn()
{
    timer++;

    if(timer>delay) 
    {
        delay = Random.Range(0.0, 100.0);
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

