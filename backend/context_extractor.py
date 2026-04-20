import os
import ast


# -------------------------------
# Extract Functions & Classes
# -------------------------------
def extract_python_structure(file_path):
    functions = []
    classes = []

    try:
        with open(file_path, "r", encoding="utf-8") as f:
            tree = ast.parse(f.read())

        for node in ast.walk(tree):
            if isinstance(node, ast.FunctionDef):
                functions.append(node.name)
            elif isinstance(node, ast.ClassDef):
                classes.append(node.name)

    except Exception as e:
        print(f"Error parsing {file_path}: {e}")

    return functions, classes


# -------------------------------
# Extract Imports (Relationships)
# -------------------------------
def extract_imports(file_path):
    imports = []

    try:
        with open(file_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()

                if line.startswith("from "):
                    parts = line.split()
                    if len(parts) > 1:
                        imports.append(parts[1])

                elif line.startswith("import "):
                    parts = line.split()
                    if len(parts) > 1:
                        imports.append(parts[1])

    except Exception as e:
        print(f"Error reading imports in {file_path}: {e}")

    return imports


# -------------------------------
# Build Context (Main Engine)
# -------------------------------
def build_context(root_dir):
    context = []

    context.append("PROJECT: QuantInsight Backend\n")

    for folder, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".py"):
                path = os.path.join(folder, file)

                functions, classes = extract_python_structure(path)
                imports = extract_imports(path)

                context.append(f"\nFILE: {path}")
                context.append(f"Classes: {classes if classes else 'None'}")
                context.append(f"Functions: {functions if functions else 'None'}")
                context.append(f"Depends on (Imports): {imports if imports else 'None'}")

    return "\n".join(context)


# -------------------------------
# Run Script
# -------------------------------
if __name__ == "__main__":
    ROOT_DIR = "./"  # change if needed

    result = build_context(ROOT_DIR)

    with open("context.txt", "w", encoding="utf-8") as f:
        f.write(result)

    print("✅ context.txt generated successfully!")