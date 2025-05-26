"use client";
import { useLayoutEffect } from "react";
import { useAppDispatch } from "./useRedux";
import { HeaderSliceType, setHeaderContent } from "../store/root/header_slice";

export function useHeaderContent({ title, breadcrumbs, deps }: HeaderSliceType) {
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(setHeaderContent({ title, breadcrumbs }));
    }, [deps, title, breadcrumbs,dispatch]);
}