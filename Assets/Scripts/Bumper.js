#pragma strict

public var player: GameObject;
public var amplitude:int;

function OnTriggerEnter (other : Collider) {
	if (other.CompareTag ("Player"))
	    player.SendMessage("doBump", amplitude);
	
}