// 'use client';
import { ViewsApi } from '@/types/types';
import React, { useEffect, useRef } from 'react';
import CardView from './CardView';

interface NoticiasProps {
  views: ViewsApi[];
}
export default function Noticias({ views }: NoticiasProps) {
  // const listViews = useRef<HTMLElement>(null);
  // function detectWrap() {
  //   // let wrappedItems = [];
  //   let prevItem: DOMRect = {
  //     bottom: 0,
  //     height: 0,
  //     left: 0,
  //     right: 0,
  //     top: 587.5,
  //     width: 0,
  //     x: 0,
  //     y: 0,
  //     toJSON: () => {},
  //   };
  //   let currItem: DOMRect;
  //   if (listViews.current?.children !== undefined) {
  //     for (let i = 0; i < listViews.current?.children.length; i++) {
  //       currItem = listViews.current?.children[i].getBoundingClientRect();
  //       console.log(currItem);
  //       if (prevItem.top < currItem.top) {
  //         listViews.current?.children[i].classList.add('close');
  //       } else {
  //         listViews.current?.children[i].classList.remove('close');
  //       }
  //       prevItem = currItem;
  //     }
  //   }

  //   // return wrappedItems;
  // }

  // // window.onresize = function (event) {
  // //   var wrappedItems = detectWrap();
  // //   for (var k = 0; k < wrappedItems.length; k++) {
  // //     wrappedItems[k].className = 'wrapped';
  // //   }
  // // };
  // useEffect(() => {
  //   detectWrap();
  // }, [listViews]);
  // window.addEventListener('resize', detectWrap);

  return (
    <div className='views'>
      <section className='views__section'>
        {views.map((view, index) => (
          <CardView view={view} key={`${view.id}${index}`} index={index} />
        ))}
      </section>
    </div>
  );
}
