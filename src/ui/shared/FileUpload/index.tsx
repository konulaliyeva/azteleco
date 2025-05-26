import { useMemo, useState } from "react";
import { TFileUpload } from "./TInputFile";
import Button from "../Button";
import { useFormContext } from "react-hook-form";
import { CheckCircleIconSVG, ExcelIconSVG, ImageIconSVG, InfoCircleIconSVG, PDFIconSVG, PinIconSVG, TrashbinSVG, ViewIconSVG, WordIconSVG } from "@public/vectors";
import { useTranslations } from "next-intl";

function FileUpload({ value, onChange, hasView, disabled, error, dataError, ...props }: TFileUpload) {
    const methods: any = useFormContext();
      const t = useTranslations("CareersPage");
    const [selectedFile, setSelectedFile] = useState<File | null>(value ?? null);
    const handleFileChange = (e: any) => {
        if (e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            onChange(e.target.files[0]);
        }
    };
    const handleDeleteFile = () => {
        setSelectedFile(null);
        onChange(undefined);
    };

    const renderFileFormat = useMemo(() => {
        const check = selectedFile?.type?.split("/")?.[1];

        switch (check) {
            case "pdf":
                return <PDFIconSVG className="mr-2" />;
           
            case "vnd.openxmlformats-officedocument.wordprocessingml.document":
                return <WordIconSVG className="mr-2" />;
    
        }
    }, [selectedFile]);

    const handlePreviewFile = () => {
        let temp: File = selectedFile as File;
        if (selectedFile) {
            window.open(URL.createObjectURL(temp), "_blank");
        }
    };

    return (
        <>
            {!selectedFile ? (
                <div>
                    <div
                        className={`relative group flex p-2 pl-4 justify-between items-center w-full h-12 rounded-xl border bg-gray-50 hover:bg-gray-100 ${
                            Object.values(methods.formState.errors).length && methods.formState.errors[dataError]
                                ? "border-error-500"
                                : "border-gray-300"
                        }`}
                    >
                        <input
                            // value={selectedFile}
                            type="file"
                            onChange={handleFileChange}
                            className="w-full h-12 opacity-0 absolute"
                            accept=".pdf,.docx,.png,.jpeg,.jpg,.xlsx"
                            {...props}
                        />
                        <p>
                            <span className="text-gray-500 text-16px500 group-hover:text-black">{t("uploadCV")}</span>
                        </p>
                        <div className="py-2 px-4 rounded-md flex  items-center gap-x-4">
                            {/* <p className="text-gray-600 text-16px500">Yüklə</p> */}
                            <PinIconSVG className="text-gray-600" />
                        </div>
                    </div>
                    <p className="text-error-500 text-14px400">
                        {dataError && Object.values(methods.formState.errors).length
                            ? methods.formState.errors[dataError]?.message
                            : null}
                    </p>
                    <span className="flex items-center gap-x-2 text-14px500 text-gray-400 mt-2">
                     <InfoCircleIconSVG />{t("fileInfo")}
                    </span>
                </div>
            ) : (
                <div>
                    <div
                        className={`flex p-2 pl-4 justify-between items-center gap-x-2 w-full h-14 rounded border ${
                            disabled ? "bg-gray-100 pointer-events-none" : "bg-white"
                        } ${
                            Object.values(methods.formState.errors).length && methods.formState.errors[dataError]
                                ? " border-error-500"
                                : " border-gray-300"
                        }`}
                    >
                        <div className="flex items-center gap-x-1 truncate">
                            <p>{renderFileFormat}</p>
                            <p className="text-gray-600 text-15px500 truncate">{selectedFile && selectedFile.name}</p>
                        </div>
                        <div className="flex gap-x-2">
                            {!disabled && (
                                <Button onClick={() => handleDeleteFile()} type="button" className={`p-3`}>
                                    <TrashbinSVG className="text-gray-600" />
                                </Button>
                            )}
                            {hasView && (
                                <Button
                                    onClick={() => handlePreviewFile()}
                                    type="button"
                                    className={`flex items-center gap-2 py-2 px-4 bg-gray-25 border border-gray-300 rounded-md ${
                                        disabled ? "bg-gray-100" : "bg-white"
                                    }`}
                                >
                                    <ViewIconSVG />
                                    <p className="text-gray-800 text-14px600">Bax</p>
                                </Button>
                            )}
                            <Button
                                type="button"
                                className={`cursor-text flex items-center gap-2 py-2 px-4 bg-blue-50 border border-blue-600 rounded-md ${
                                    disabled ? "bg-gray-100 border-gray-300" : "bg-blue-50"
                                }`}
                            >
                                <p className={`text-14px600 ${disabled ? "text-gray-600" : "text-blue-600"}`}>
                                    Yüklənib
                                </p>
                                <CheckCircleIconSVG
                                    className={`text-14px600 ${disabled ? "text-gray-600" : "text-blue-600"}`}
                                />
                            </Button>
                        </div>
                    </div>
                    <p className="text-error-500 text-14px400">
                        {dataError && Object.values(methods.formState.errors).length
                            ? methods.formState.errors[dataError]?.message
                            : null}
                    </p>
                </div>
            )}
        </>
    );
}

export default FileUpload;
