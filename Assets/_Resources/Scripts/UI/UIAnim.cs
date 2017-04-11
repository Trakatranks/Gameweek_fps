using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIAnim : MonoBehaviour {

    public Dir direction;

    public GameObject testObj;

    protected Vector3 startPoint;
    protected Vector3 destPoint;

    public uint animDelay = 0;
    public uint steps = 1;

    public int baseAlpha = 0;
    public int endAlpha = 1;

    public void Start()
    {
        Init();
    }

    public void Update()
    {
        if (animDelay-- <= 0)
        {

        }
    }

    protected void Init()
    {
        if (baseAlpha < 0 || baseAlpha > 1)
        {
            baseAlpha = 0;
        }
        
        if (endAlpha < 0 || endAlpha > 1)
        {
            endAlpha = 1;
        }

        ComeFrom(direction);
        destPoint = GetComponent<RectTransform>().position;
    }

    protected void ComeFrom(Dir dir)
    {
        switch (dir)
        {
            case Dir.UP:
                startPoint = new Vector3(GetComponent<RectTransform>().position.x,0,0);
                break;
            case Dir.DOWN:
                startPoint = new Vector3(GetComponent<RectTransform>().position.x, Screen.height, 0);
                break;
            case Dir.LEFT:
                startPoint = new Vector3(0, GetComponent<RectTransform>().position.y, 0);
                break;
            case Dir.RIGHT:
                startPoint = new Vector3(Screen.width, GetComponent<RectTransform>().position.y, 0);
                break;
            default :
                Debug.Log("Une valeur de l'enum Dir à changée");
                break;
        }
        
    }

}

public enum Dir
{
    UP,
    DOWN,
    LEFT,
    RIGHT
}