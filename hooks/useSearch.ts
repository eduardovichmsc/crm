"use client";
import { useState } from "react";

export const useSearch = <T extends { name: string }>(data: T[]) => {
	const [searchValue, setSearchValue] = useState("");
	const [filteredData, setFilteredData] = useState(data);

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFilteredData(
			data.filter((item) =>
				item.name.toLowerCase().includes(searchValue.toLowerCase())
			)
		);
	};

	return {
		searchValue,
		filteredData,
		handleValueChange,
		handleSubmit,
	};
};
