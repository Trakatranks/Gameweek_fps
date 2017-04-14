using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;

public class UILogoAnim : MonoBehaviour {

    public Transform TitleScreen_logo, TitleScreen_littleLogo, TitleScreen_btnPlay, TitleScreen_btnCredit, TitleScreen_btnQuit;
    public Transform CreditScreen_logo, CreditScreen_title, CreditScreen_text, CreditScreen_btnBack;
    public Transform VictoryScreen_btnReplay, VictoryScreen_btnBack, VictoryScreen_nbr_combo, VictoryScreen_combo, VictoryScreen_score;
    
    public Transform HUD_life, HUD_ball, HUD_boost, HUD_score;

    // Use this for initialization
    void Start () {
        Init();	
	}
	
    public void Init()
    {
        StartAnimLogo();
        StartAnimBtnPlay();
        StartAnimLittleLogo();
        StartAnimBtnCredit();
        StartAnimBtnQuit();

        StartAnimLogoCredit();
        StartAnimLittleLogoCredit();
        StartAnimTextCredit();
        StartAnimBtnQuitCredit();

        StartAnimBtnReplayVictory();
        StartAnimBtnComboVictory();
        StartAnimBtnComboMaxVictory();
        StartAnimScoreVictory();
        StartAnimBtnQuitVictory();

        StartAnimHudLife();
        StartAnimHudBall();
        StartAnimHudBoost();
        StartAnimHudScore();
    }
    #region titleScreen
    public void StartAnimLogo(){
        Sequence sequenceAnimLogo = DOTween.Sequence();
        sequenceAnimLogo.Append(TitleScreen_logo.DOMoveY(170, 2));
        sequenceAnimLogo.Join(TitleScreen_logo.DORotate(new Vector3(0, 125, 0), 1));
        sequenceAnimLogo.SetLoops(-1, LoopType.Yoyo);
    }

    public void StartAnimLittleLogo()
    {
        Sequence sequenceAnimLittleLogo = DOTween.Sequence();
        sequenceAnimLittleLogo.Append(TitleScreen_littleLogo.DOMoveY(207, 2));
        sequenceAnimLittleLogo.SetLoops(-1, LoopType.Yoyo);
    }

    public void StartAnimBtnPlay(){
        Sequence sequenceAnimBtnPlay = DOTween.Sequence();
        sequenceAnimBtnPlay.Append(TitleScreen_btnPlay.DOMoveY(166, 2));
        sequenceAnimBtnPlay.SetLoops(-1, LoopType.Yoyo);
    }

    public void StartAnimBtnCredit(){
        Sequence sequenceAnimBtnCredit = DOTween.Sequence();
        sequenceAnimBtnCredit.Append(TitleScreen_btnCredit.DOMoveY(80, 2));
        sequenceAnimBtnCredit.SetLoops(-1, LoopType.Yoyo);
    }

    public void StartAnimBtnQuit(){
        Sequence sequenceAnimBtnQuit = DOTween.Sequence();
        sequenceAnimBtnQuit.Append(TitleScreen_btnQuit.DOMoveY(30, 2));
        sequenceAnimBtnQuit.SetLoops(-1, LoopType.Yoyo);
    }
    #endregion

    #region creditScreen
    public void StartAnimLogoCredit()
    {
        Sequence sequenceAnimLogoCredit = DOTween.Sequence();
        sequenceAnimLogoCredit.Append(CreditScreen_logo.DOMoveY(170, 2));
        sequenceAnimLogoCredit.Join(CreditScreen_logo.DORotate(new Vector3(0, 125, 0), 1));
        sequenceAnimLogoCredit.SetLoops(-1, LoopType.Yoyo);
    }

    public void StartAnimLittleLogoCredit()
    {
        Sequence sequenceAnimLittleLogoCredit = DOTween.Sequence();
        sequenceAnimLittleLogoCredit.Append(CreditScreen_title.DOMoveY(207, 2));
        sequenceAnimLittleLogoCredit.SetLoops(-1, LoopType.Yoyo);
    }

    public void StartAnimTextCredit()
    {
        Sequence sequenceAnimBtnPlayCredit = DOTween.Sequence();
        sequenceAnimBtnPlayCredit.Append(CreditScreen_text.DOMoveY(243, 2));
        sequenceAnimBtnPlayCredit.Join(CreditScreen_text.DORotate(new Vector3(0, 50, 0), 1));
        sequenceAnimBtnPlayCredit.SetLoops(-1, LoopType.Yoyo);
    }

    public void StartAnimBtnQuitCredit()
    {
        Sequence sequenceAnimBtnQuitCredit = DOTween.Sequence();
        sequenceAnimBtnQuitCredit.Append(CreditScreen_btnBack.DOMoveY(30, 2));
        sequenceAnimBtnQuitCredit.SetLoops(-1, LoopType.Yoyo);
    }
    #endregion

    #region VictoryScreen

    public void StartAnimBtnReplayVictory()
    {
        Sequence sequenceBtnReplayVictory = DOTween.Sequence();
        sequenceBtnReplayVictory.Append(VictoryScreen_btnReplay.DOScale(1.5f, 2));
        sequenceBtnReplayVictory.SetLoops(-1, LoopType.Yoyo);
    }

        #region sousVictoryScreen
        public void StartAnimBtnComboVictory()
        {
            Sequence sequenceBtnComboVictory = DOTween.Sequence();
            sequenceBtnComboVictory.Append(VictoryScreen_nbr_combo.DOScale(1.3f, 2));
            sequenceBtnComboVictory.SetLoops(-1, LoopType.Yoyo);
        }

        public void StartAnimBtnComboMaxVictory()
        {
            Sequence sequenceBtnComboMaxVictor = DOTween.Sequence();
            sequenceBtnComboMaxVictor.Append(VictoryScreen_combo.DOScale(1.3f, 2));
            sequenceBtnComboMaxVictor.SetLoops(-1, LoopType.Yoyo);
        }

        public void StartAnimScoreVictory()
        {
            Sequence sequenceScoreVictory = DOTween.Sequence();
            sequenceScoreVictory.Append(VictoryScreen_score.DOScale(1.3f, 2));
            sequenceScoreVictory.SetLoops(-1, LoopType.Yoyo);
        }
        #endregion

    public void StartAnimBtnQuitVictory()
    {
        Sequence sequence = DOTween.Sequence();
        sequence.Append(VictoryScreen_btnBack.DOMoveY(30, 2));
        sequence.SetLoops(-1, LoopType.Yoyo);
    }
    #endregion

    #region Hud

    public void StartAnimHudLife()
    {

    }

    public void StartAnimHudBall()
    {

    }

    public void StartAnimHudBoost()
    {
        HUD_boost.position = new Vector3(HUD_boost.position.x, 290, HUD_boost.position.z);
        Sequence sequenceHudBoost = DOTween.Sequence();
        sequenceHudBoost.Append(HUD_boost.DOMoveY(220, 0.1f));
    }

    public void StartAnimHudScore()
    {

    }
    #endregion
    // Update is called once per frame
    void Update () {
	}
}
