import {useState} from 'react';
import createId from "./lib/createId";

const defaultTags = [
  {id: createId(), name: "吃饭"},
  {id: createId(), name: "购物"},
  {id: createId(), name: "交通"},
  {id: createId(), name: "房租"},
  {id: createId(), name: "工资"},
]

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTag = (id:number) => tags.filter(tag => tag.id ===id)[0];
  const findTagIndex = (id:number) => {
    let result = -1;
    for(let i = 0; i < tags.length; i++){
      if(tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id:number,name:string) => {
    setTags(tags.map(tag =>tag.id === id ? {id, name} : tag));
  };
  const deleteTag = (id:number) => {
    setTags(tags.filter(tag=>tag.id!==id));
  }
  return {tags, setTags,findTag,findTagIndex,updateTag,deleteTag};
};

export default useTags;