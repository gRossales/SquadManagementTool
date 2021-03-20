import React from "react";
import styles from "./styles.module.css";
import Card from "../../components/Card";
import TagInput from "../../components/TagInput";
import SoccerField from "../../components/SoccerField";
import SearchedPlayer from "../../components/SearchedPlayer";

function TeamCreatePage() {
  return (
    <div className={styles.container}>
      <Card title="Create your team">
        <section className={styles["team-info"]}>
          <h3 className={styles["team-info-title"]}>Team Info</h3>
          <div className={styles["input-section"]}>
            <div className={styles["input-group"]}>
              <div className={styles["input-block"]}>
                <label htmlFor="name">Team name</label>
                <input placeholder="Insert team name" />
              </div>
              <div className={styles["input-block"]}>
                <label htmlFor="description">Description</label>
                <textarea />
              </div>
            </div>
            <div className={styles["input-group"]}>
              <div className={styles["input-block"]}>
                <label htmlFor="website">Team website</label>
                <input placeholder="http://myteam.com" />
              </div>
              <div className={styles["input-radio"]}>
                <p>Team type</p>
                <label>
                  <input type="radio" value="real" name="teamType" />
                  <span>Real</span>
                </label>
                <label>
                  <input type="radio" value="fantasy" name="teamType" />
                  <span>Fantasy</span>
                </label>
              </div>
              <TagInput />
            </div>
          </div>
        </section>
        <section className={styles["team-info"]}>
          <h3 className={styles["team-info-title"]}>Configure Squad</h3>
          <div className={styles["input-section"]}>
            <div className={styles["input-group"]}>
              <div className={`${styles["input-block"]}  ${styles["inline"]}`}>
                <label htmlFor="formation">Formation</label>
                <select name="formation" id="formation">
                  <option value="3-2-2-3">3-2-2-3</option>
                  <option value="3-2-3-1">3-2-3-1</option>
                  <option value="3-4-3">3-4-3</option>
                  <option value="3-5-2">3-5-2</option>
                  <option value="4-2-3-1">4-2-3-1</option>
                  <option value="4-3-1-1">4-3-1-1</option>
                  <option value="4-3-2">4-3-2</option>
                  <option value="4-4-2">4-4-2</option>
                  <option value="4-5-1">4-5-1</option>
                  <option value="5-4-1">5-4-1</option>
                </select>
              </div>
              <SoccerField />
              <button>Save</button>
            </div>
            <div className={styles["input-group"]}>
              <div className={styles["input-block"]}>
                <label htmlFor="name">Search Players</label>
                <input placeholder="Search player name" />
              </div>
              <div className={styles["search-results"]}>
                <SearchedPlayer />
                <SearchedPlayer />
              </div>
            </div>
          </div>
        </section>
      </Card>
    </div>
  );
}

export default TeamCreatePage;
