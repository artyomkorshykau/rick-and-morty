import {CharacterCard} from "@/components/Character/characterCard";
import HeadMeta from "@/components/HeadMeta/head";
import {getLayout} from "@/components/Layout/layout";
import {useCharacter} from "@/assets/hooks/useCharacter";
import s from './characters.module.scss'

function Character() {

  const character = useCharacter()

  return (
      <div className={s.characters}>
        <HeadMeta title={'Characters'}/>
        {character && <CharacterCard id={character.id}
                                     image={character.image}
                                     name={character.name}/>
        }
      </div>
  );
}

Character.getLayout = getLayout
export default Character
